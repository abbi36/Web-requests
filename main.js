import got from 'got';

async function main() {
    const resp = await got('https://httpbin.org/get').json();
    console.log(resp);
}

main();