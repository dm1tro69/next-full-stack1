import Post from '@/models/Post';
import connectDB from '@/utils/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { id } = params;
    try {
        await connectDB();
        const posts = await Post.findById(id);
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
