

export default function Youtube({ id } : { id: string }) {
    return (
        <div>
            <iframe
                className="aspect-video w-full my-8"
                src={"https://www.youtube.com/embed/" + id}
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
        </div>
    )
}