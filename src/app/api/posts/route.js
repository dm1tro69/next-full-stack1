import Post from '@/models/Post';
import connectDB from '@/utils/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const url = new URL(request.url);
    const username = url.searchParams.get('username');
    try {
        await connectDB();
        const posts = await Post.find(username && { username });
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
