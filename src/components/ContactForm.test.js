import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'
import 'mutationobserver-shim'


// test inputs, submit, and new ui

test ('renders form', () =>{
    render(<ContactForm />)
})


test('renders user info after filling inputs and submitting', async () =>{
    render(<ContactForm />)
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageTextArea = screen.getByLabelText(/message/i)

    const submitBtn = screen.getByRole('button', { name: /submit/i})

    

    
    fireEvent.change(firstNameInput, { target: {value: 'Nova' } })
    fireEvent.change(lastNameInput, { target: {value: 'Blackstock' } })
    fireEvent.change(emailInput, { target: { value: 'thisisnotanemail@mail.com' } })
    fireEvent.change(messageTextArea, { target: { value: 'The perception that the glass is half full or half empty is merely an epistemological differentiation upon the whole glass which inherently contains both qualities.' } })

    fireEvent.click(submitBtn)
    
    
    const submissionResult = screen.findByTestId(/submissionResult/i)
    expect(await submissionResult).toBeInTheDocument()
    
})