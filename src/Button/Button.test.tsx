import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';
import DummyIcon from '../dev-utils/icons/DummyIcon';
import React from 'react';


describe('Button component', () => {
    describe('Display Requirements', () => {
        it('should render the button', () => {
            render(<Button text="Test Button" onClick={() => {}} ariaLabel={'Test B'} />);
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
        });
        it('should be visible', () => {
            render(<Button text="Test Button" onClick={() => {}} ariaLabel='Test Button' />);
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
        });
        it('should display correct text', () => {
            render(<Button text="Test Button" onClick={() => {}} ariaLabel='Test Button' />);
            const button = screen.getByRole('button');
            expect(button).toHaveTextContent('Test Button');
        });
    });
    describe('Interaction Requirements', () => {
        it('should trigger expected function on click once', () => {
            const handleClick = vi.fn();
            render(<Button text="Test Button" onClick={handleClick} ariaLabel='Test Button' />);
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(handleClick).toHaveBeenCalledTimes(1);
        });
        it('should trigger expected function on click twice', () => {
            const handleClick = vi.fn();
            render(<Button text="Test Button" onClick={handleClick} ariaLabel='Test Button' />);
            const button = screen.getByRole('button');
            fireEvent.click(button);
            fireEvent.click(button);
            expect(handleClick).toHaveBeenCalledTimes(2);
        });
        it('should render the button as disabled when the disabled prop is true', () => {
            render(<Button text="Test Button" onClick={() => {}} disabled={true} ariaLabel='Test Button' />);
            const button = screen.getByRole('button');
            expect(button).toBeDisabled();
        });
        it('should not trigger onClick when the button is disabled', () => {
            const handleClick = vi.fn();
            render(<Button text="Test Button" onClick={handleClick} disabled={true} ariaLabel='Test Button'/>);
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(handleClick).not.toHaveBeenCalled();
        });
        it('should render the button as enabled when the disabled prop is false', () => {
            render(<Button text="Test Button" onClick={() => {}} disabled={false} ariaLabel='Test Button' />);
            const button = screen.getByRole('button');
            expect(button).toBeEnabled();
        });
    });
    describe('Accessibility Requirements', () => {
        it('should be accessible by screen readers with aria-label', () => {
            render(<Button text="Click Me" ariaLabel="Custom Label" onClick={() => {}} />);
            const button = screen.getByRole('button', { name: /Custom Label/i });
            expect(button).toBeInTheDocument();
        });
        it('should prefer aria-label over visible text for accessibility name', () => {
            render(<Button text="Visible Text" ariaLabel="Aria Label" onClick={() => {}} />);
            const button = screen.getByRole('button', { name: /Aria Label/i });
            expect(button).toBeInTheDocument();
            expect(button).toHaveAccessibleName('Aria Label');
        });
        it('should be focusable', () => {
            render(<Button text="Focusable Button" onClick={() => { } } ariaLabel='Aria Label' />);
            const button = screen.getByRole('button');
            
            button.focus();
            expect(button).toHaveFocus();
        });
    });
    describe('Conditional Rendering Requirements', () => {
        it('should not be rendered when hidden prop is true', () => {
            render(<Button text="Test Button" onClick={() => {}} ariaLabel='Test Button' hidden={true} />);
            const button = screen.queryByRole('button');
            expect(button).not.toBeInTheDocument();
        });    
        it('should be rendered when hidden prop is false', () => {
            render(<Button text="Test Button" onClick={() => {}} ariaLabel='Test Button' hidden={false} />);
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
        }); 
    });
    describe('Button component', () => {
        const remToPx = (rem: string, baseFontSize: number = 16) => {
            const remValue = parseFloat(rem.replace('rem', ''));
            return `${remValue * baseFontSize}px`;
          };

        it('should be 48px in height without icon', () => {
            render(<Button text="Test Button" onClick={() => { } } ariaLabel={''} />);
      
            const button = screen.getByRole('button');
            const computedStyle = window.getComputedStyle(button);

            const heightInPx = remToPx(computedStyle.height);
    
            expect(heightInPx).toBe('48px');
        });

        it('should be 48px in height with icon', () => {
            render(<Button icon={<DummyIcon />} text="Test Button" onClick={() => { } } ariaLabel={''} />);
      
            const button = screen.getByRole('button');
            const computedStyle = window.getComputedStyle(button);

            const heightInPx = remToPx(computedStyle.height);
    
            expect(heightInPx).toBe('48px');
        });

        it('should render an icon with a width and height of 24px', () => {
            render(
              <Button 
                text="Play Music"
                onClick={() => {}}
                icon={<DummyIcon />} 
                ariaLabel={'Arial Label'} 
              />
            );
        
            const icon = screen.getByRole('img');
        
            const computedStyle = window.getComputedStyle(icon);

            const widthInPx = remToPx(computedStyle.width);
            const heightInPx = remToPx(computedStyle.height);
        
            expect(widthInPx).toBe('24px');
            expect(heightInPx).toBe('24px');
        });
        
    });
});
