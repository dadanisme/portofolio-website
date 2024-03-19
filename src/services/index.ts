import * as fs from "fs";
import { faker } from "@faker-js/faker";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

const resend = new Resend("re_9f7doiva_KDxmhcemgf2muR8zUccitWT7");

export async function getProjects() {
  // read from public folder
  const projects = fs.readFileSync("public/projects.json", "utf-8");
  return JSON.parse(projects).reverse();
}

export async function createProject() {
  "use server";
  const title = faker.lorem.words(7);
  const project = {
    // random slug
    slug: slugify(title),
    title,
  };

  // append to public folder
  const projects = await getProjects();
  projects.push(project);

  fs.writeFileSync("public/projects.json", JSON.stringify(projects));

  revalidatePath("/project");
  return project;
}

export function slugify(title: string) {
  return title.toLowerCase().replace(/ /g, "-");
}

const encourageWords = [
  "Finish what you started.",
  "You're doing great!",
  "You're amazing!",
  "Can't wait to see what you do next!",
  'Your website is "coming soon"!',
  "When will you launch your website?",
  "Any updates on your website?",
  "Are you still working on your website?",
  "Apple cannot wait your registration!",
];

export async function encourageMe(ua: string | null) {
  "use server";

  const randomWord =
    encourageWords[Math.floor(Math.random() * encourageWords.length)];
  const html = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f2f2f2;
              padding: 20px;
            }
            h1 {
              color: #333;
              font-size: 24px;
              margin-bottom: 10px;
            }
            p {
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <h1>Hey Ramdan!</h1>
          <p>
            I just wanted to remind you that you have a website to
            finish. You're doing great, keep it up!

            <br/>
            I visited your website at ${new Date().toLocaleString()} 
            and it's looking good. I can't wait to see
            what you do next. I'm sure it will be amazing!

            <br />
            <br />
            Best, <br />
            Your Visitor

            </p>
 
            <p>${ua || ""}</p>
        </body>
      </html>
    `;

  const { data, error } = await resend.emails.send({
    from: "Visitor <encourage@muhammadramdan.com>",
    to: "huntercitation@gmail.com",
    subject: `[Reminder] ${randomWord}`,
    html,
  });

  if (error) {
    console.error(error);
  }

  return randomWord;
}
