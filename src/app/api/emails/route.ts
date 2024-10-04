import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import ContactFormEmail from '@/emails/ContactFromEmail';



const resend = new Resend(process.env.RESEND_API_KEY);




export async function POST(req:NextRequest) {
 
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

        
    } catch (error:unknown) {
        if (error instanceof Error) {
            return NextResponse.json({
              message: error.message,
              status: 500
            });
          } else {
            return NextResponse.json({
              message: "An unexpected error occurred",
              status: 500
            });

    }
    


}; 

}

