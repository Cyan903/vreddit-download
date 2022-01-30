export interface Response {
    code: number;
    res: Res;
}

export interface Res {
    id: string;
    videos: Video[];
    audio: string;
}

export interface Video {
    height: string;
    width: string;
    framerate: string;
    url: string;
}
