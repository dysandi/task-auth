import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!findUser) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const hashedPassword = findUser.password;

    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    const payload = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
    };

    const accesToken = sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    const res = NextResponse.json({
      accesToken,
      data: payload,
      message: "User login succesfully",
    });

    res.cookies.set("token", accesToken);

    return res;
  } catch (error) {
    return NextResponse({ error: error }, { status: 500 });
  }
}
