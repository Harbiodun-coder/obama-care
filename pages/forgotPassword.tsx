import Button from '@/components/Button'
import Input from '@/components/Input'
import OnBoardingLayout from '@/components/OnBoardingLayout'
import React from 'react'
import { useRouter } from "next/router";

export default function forgotPassword() {
    const router = useRouter()
    return (
        <OnBoardingLayout>

        <div className=' p-8'>
            <div className=' flex items-center pt-8 justify-end'>
                <a href="#" className=' pr-10 text-[#9CA3AF] text-sm'>Remember Password?</a>
                <div className="">
                <Button
                intent="primary"
                type="button"
                action={() => router.push("/login")}
                size="bg"
                text="Login"
                isLoading={false}
                />
                </div>
            </div>
            <div className=' w-[85%]'>
                <h1 className=' text-4xl font-bold py-8'>Forgot Password</h1>
                <p className=' text-[#9CA3AF] text-base pb-10'>Enter your personal email</p>
                <div>
                    <Input
                        type='email'
                        name='email'
                        label='Email'
                        placeholder='example@gmail.com'
                        change={undefined} value={undefined}                    />
                    <div className=' pt-8'>
                        <Button text='Reset Password' isLoading={false} intent={"primary"} size="bg" />
                    </div>
                </div>
            </div>
        </div>
        </OnBoardingLayout>
    )
}