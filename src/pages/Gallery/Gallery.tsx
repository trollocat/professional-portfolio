import { banners, smallbanners, thumbnails, coverarts } from "../../data/gallery.json";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Gallery.css";

interface Image {
    src: string;
    alt: string;
    type: string;
}

const Gallery = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [nsfwEnabled, setNsfwEnabled] = useState(false);
    const [selectedImage, setSelectedImage] = useState<null | string>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { t } = useTranslation("gallery");

    const imageModal = () => {
        if (!dialogRef.current) return
        if (dialogRef.current.hasAttribute("open")) dialogRef.current.close()
        else dialogRef.current.showModal()
    }

    useEffect(() => {
        const combinedImages = [
            ...coverarts.map((coverart) => ({ ...coverart, type: "coverart" })),
            ...smallbanners.map((smallbanner) => ({ ...smallbanner, type: "smallbanner" })),
            ...banners.map((banner) => ({ ...banner, type: "banner" })),
            ...thumbnails.map((thumbnail) => ({ ...thumbnail, type: "thumbnail" })),
        ];
        const filteredImages = combinedImages.filter(image =>
            nsfwEnabled || !image.src.toLowerCase().includes("nsfw")
        );
        setImages(filteredImages);

        // const shuffledImages = filteredImages.sort(() => Math.random() - 0.5);
        // setImages(shuffledImages);
    }, [nsfwEnabled]);


    return (
        <>
            <div className="button-container">
                <button
                    type="button"
                    title={nsfwEnabled ? `${t('nsfw.disable')} ${t('nsfw.nsfw-tooltip')}` : `+18! ${t('nsfw.enable')} ${t('nsfw.nsfw-tooltip')}`}
                    className={`nsfw-button ${nsfwEnabled}`}
                    onClick={() => setNsfwEnabled(!nsfwEnabled)}
                    onKeyDown={(e) => {
                        // keyboard accessibility
                        if (e.key === "Enter") {
                            e.preventDefault();

                            e.stopPropagation();
                            setNsfwEnabled(!nsfwEnabled)
                        }
                    }}
                >
                    {nsfwEnabled ? t('nsfw.disable') : t('nsfw.enable')} NSFW ⚠
                </button>
            </div>
            {images && (
                <div className="gallery-grid card">
                    {images.map((image) => (
                        <div
                            key={image.alt + "-container"}
                            className="image-container"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                // keyboard accessibility
                                if (e.key === "Enter") {
                                    const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                                    if (img) {
                                        setSelectedImage(img.src.replace("-preview", ""));
                                        imageModal();
                                    }
                                }
                            }}
                        >
                            <img
                                key={image.alt}
                                src={image.src.replace(".webp", "-preview.webp")}
                                alt={image.alt}
                                className={`${image.type} ${image.src.includes("nsfw") && !nsfwEnabled ? "nsfw" : ""}`}
                                onClick={(e) => {
                                    setSelectedImage((e.target as HTMLImageElement).src.replace("-preview", ""))
                                    imageModal()
                                }}
                            />
                        </div>
                    ))}
                    <dialog
                        ref={dialogRef}
                        className="image-viewer"
                        tabIndex={0}
                        onClick={(e) => {
                            if (e.currentTarget === e.target) {
                                setSelectedImage(null)
                                imageModal()
                            }
                        }}
                        onKeyDown={(e) => {
                            // keyboard accessibility
                            if (e.key === "Enter") {
                                if (e.currentTarget === e.target) {
                                    setSelectedImage(null)
                                    imageModal()
                                }
                            }
                        }}
                    >
                        {selectedImage && (
                            <>
                                <img className="selected-image" src={selectedImage} />
                                <div className="image-info">
                                </div>
                            </>
                        )}
                    </dialog>
                </div>
            )}
        </>
    );
};

export default Gallery;
