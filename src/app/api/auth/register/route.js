import connectDB from '@/utils/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

// const hashedPassword = await bcrypt.hash(password, 5);
// export const POST = async (request) => {
//     const { name, email, password } = await request.json();
//     await connectDB();
//     const hashedPassword = await bcrypt.hash(password, 5);
//     const newUser = new User({
//         name,
//         email,
//         password: hashedPassword,
//     });
//     try {
//         await newUser.save();
//         return new NextResponse('User has been created', { status: 201 });
//     } catch (error) {
//         return new NextResponse('Error', { status: 500 });
//     }
// };
export const POST = async (request) => {
    const { name, email, password } = await request.json();

    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return new NextResponse('User has been created', {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};
