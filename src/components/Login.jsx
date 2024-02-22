import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const login = async (data) => {
        setError('');
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='flex items-center justify-center w-full py-28 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                <div>
                    <div className='flex items-center justify-center'>
                        <Logo width='100px' />
                    </div>
                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign in to your account</h2>
                    <p className='mt-2 text-center text-sm text-gray-600'>
                        Don't have an account?{' '}
                        <Link to='/signup' className='font-medium text-primary hover:text-indigo-500'>
                            Sign Up
                        </Link>
                    </p>
                </div>
                {error && <p className='text-red-600 text-center'>{error}</p>}
                <div className='text-center text-gray-600'>
                    <p>For testing purposes, you can use the following credentials:</p>
                    <p>Email: <strong>Test@gmail.com</strong></p>
                    <p>Password: <strong>Test@1234</strong></p>
                </div>
                <form className='mt-8 space-y-6' onSubmit={handleSubmit(login)}>
                    <Input
                        label='Email Address'
                        type='email'
                        autoComplete='email'
                        required
                        {...register('email', {
                            required: true,
                            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        })}
                    />
                    <Input
                        label='Password'
                        type='password'
                        autoComplete='current-password'
                        required
                        {...register('password', {
                            required: true,
                        })}
                    />
                    <Button type='submit' className='w-full'>
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
