/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Footer from './index';
import React from "react";

describe('global footer', () => {
    render(<Footer />)
    it('renders a footer', () => {
        expect(screen.getByText('the skin studio by nikki')).toBeTruthy();
    })
    it('has a button', () => {
        expect(screen.getByRole('button')).toBeTruthy();
    })
})