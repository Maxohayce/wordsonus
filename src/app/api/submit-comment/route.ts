import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const params = new URLSearchParams();
  params.append("comment_post_ID", body.postId);
  params.append("author", body.name);
  params.append(
    "email",
    `${body.name.replace(/\s+/g, "").toLowerCase()}@wordsonus.test`
  );
  params.append("comment", body.comment);

  try {
    const wpRes = await fetch(
      "https://blogs.wordsonus.ng/wp-comments-post.php",
      {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!wpRes.ok) {
      const text = await wpRes.text();
      return NextResponse.json(
        { error: "Failed to post comment", detail: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", detail: error },
      { status: 500 }
    );
  }
}
