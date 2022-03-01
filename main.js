import got from 'got';

async function main() {
    const resp = await got('https://api.github.com/users/abbi36/repos').json();
    console.log(resp);
}

main();