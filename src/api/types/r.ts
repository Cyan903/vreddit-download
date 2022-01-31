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
    height: number;
    width: number;
    framerate: string;
    url: string;
}
