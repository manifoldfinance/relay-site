const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

// @note this should be `NEXT_PUBLIC_COMMIT_SHA` for nextjs
const commit = process.env.NEXT_PUBLIC_COMMIT_SHA;

async function getCommit() {
  if (!commit) return `No COMMIT_SHA environment variable set.`;
  try {
    const res = await fetch(`https://api.github.com/repos/${github_org}/${github_repo}/commits/${commit}`);
    const data = await res.json();
    return {
      isDeployCommit: commit === 'HEAD' ? 'Unknown' : true,
      sha: data.sha,
      author: data.commit.author.name,
      date: data.commit.author.date,
      message: data.commit.message,
      link: data.html_url,
    };
  } catch (error) {
    return `Unable to get git commit info: ${error.message}`;
  }
}

async function go() {
  const buildInfo = {
    buildTime: Date.now(),
    commit: await getCommit(),
  };

  // @note this is different for nextjs, should be in dir: `.next/~`
  fs.writeFileSync(path.join(__dirname, '../.next/server/pages/artifact.json'), JSON.stringify(buildInfo, null, 2));
  console.log('build info generated', buildInfo);
}
go();

/*
eslint
  consistent-return: "off",
*/