import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')           // Replace spaces with -
		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		.replace(/\-\-+/g, '-');         // Replace multiple - with single -
}

async function main() {
	console.log('\n=== Create a New Blog Post ===\n');

	try {
		const title = (await askQuestion('Enter blog title: ')).trim();
		if (!title) {
			console.error('Error: Title is required.');
			rl.close();
			return;
		}

		const description = (await askQuestion('Enter description: ')).trim();
		if (!description) {
			console.error('Error: Description is required.');
			rl.close();
			return;
		}

		const tagsInput = await askQuestion('Enter tags (comma-separated, e.g. AI, webdev): ');
		const tags = tagsInput
			.split(',')
			.map(t => t.trim().toLowerCase())
			.filter(Boolean);

		const imageInput = await askQuestion('Enter image filename under /assets/blog/ (optional, e.g. post1.jpg): ');
		const img = imageInput ? `/assets/blog/${imageInput.trim()}` : '';

		const readTimeInput = await askQuestion('Enter read time (optional, e.g. "5 min read"): ');
		const readTime = readTimeInput.trim();

		const slug = slugify(title);
		const targetDir = path.resolve('src/content/blog');
		const targetFile = path.join(targetDir, `${slug}.md`);

		// Enforce directory boundary check for security
		if (!targetFile.startsWith(targetDir)) {
			console.error('Error: Invalid file path generated (path traversal detected).');
			rl.close();
			return;
		}

		if (fs.existsSync(targetFile)) {
			console.error(`Error: A blog post with slug "${slug}" already exists at: ${targetFile}`);
			rl.close();
			return;
		}

		// Ensure directory exists
		fs.mkdirSync(targetDir, { recursive: true });

		const formattedDate = new Date().toISOString().split('T')[0];
		const tagsStr = tags.map(t => `"${t}"`).join(', ');

		const markdownContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
publishDate: ${formattedDate}
tags: [${tagsStr}]
img: "${img}"
img_alt: "${title.replace(/"/g, '\\"')}"
${readTime ? `readTime: "${readTime}"` : '# readTime will be calculated automatically based on word count'}
---

# Introduction

Write your introduction here...

## First Topic

Write more details about your topic here...

- Item 1
- Item 2
- Item 3

## Code Snippet Example

\`\`\`javascript
// A simple code snippet
console.log("Hello, World!");
\`\`\`

## Key Takeaway

> This is a quote block. Use it to highlight key information or takeaways.

Enjoy writing your post!
`;

		fs.writeFileSync(targetFile, markdownContent, 'utf-8');
		console.log(`\n🎉 Success! New blog post created at:\n   ${targetFile}`);
		console.log('\nRun "npm run dev" to see it live!');
	} catch (error) {
		console.error('An error occurred:', error);
	} finally {
		rl.close();
	}
}

main();
