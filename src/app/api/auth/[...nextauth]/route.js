import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '@/utils/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials) {
                await connectDB();
                try {
                    const user = await User.findOne({
                        email: credentials.email,
                    });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error('Invalid password');
                        }
                    } else {
                        throw new Error('User not found');
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
    ],
});
export { handler as GET, handler as POST };
