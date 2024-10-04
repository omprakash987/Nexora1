import { Resend } from 'resend';
import Welcome from '@/emails/Welcome';
import { NextRequest, NextResponse } from 'next/server';
import ContactFormEmail from '@/emails/ContactFromEmail';



const resend = new Resend(process.env.RESEND_API_KEY);




export async function POST(req:NextRequest,res:NextResponse) {
 
    try {
        const {name,email,message} = await req.json(); 

        const response = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'kanuparewa371@gmail.com',
            subject: 'hello world',
            react: ContactFormEmail({name,email,message}),

          });
          return NextResponse.json({
            message:"email send successfully",
            response
          },{status:200})

        
    } catch (error:any) {
        return NextResponse.json({
            message:error.message,
            status:500
        })
    }
    


}; 



