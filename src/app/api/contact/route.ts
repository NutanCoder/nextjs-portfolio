import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, subject, message } = body;

  const url = process.env.FORM_URL as string;

  const formData = new URLSearchParams();
  formData.append("entry.1883219675", name);
  formData.append("entry.420272024", email);
  formData.append("entry.555385700", subject);
  formData.append("entry.1509220846", message);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (response.ok) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
