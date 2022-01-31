import { Error } from "./types/error";
import { Main } from "./types/main";
import { Response } from "./types/r";
import config from "@/config.json";

export async function getVideoInfo(
    subreddit: string,
    id: string
): Promise<Response | Error> {
    const req: Response = await fetch(
        `${config.api}/r/${subreddit}/${id}`
    ).then((data) => data.json());

    if (req.code != 200) {
        console.warn(`[api] error with request! (${req.code})`, req.res);
    }

    return req;
}

export async function getHome(): Promise<Main> {
    return await fetch(config.api).then((data) => data.json());
}

export function download(postid: string, quality: string): string {
    return `${config.api}/dl/${postid}/${quality}`;
}
