export interface BookListResponse {
    kind: string;
    items: BookResponse[]
}

interface BookResponse {
    id: string;
    volumeInfo: BookVolumeInfo;
}

export interface BookVolumeInfo {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
}