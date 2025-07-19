import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";

const VideoPreview = ({ children }) => {
    const [isHovering, setIsHovering] = useState(false);

    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    // Handles mouse movement over the container
    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const rect = currentTarget.getBoundingClientRect();

        const xOffset = clientX - (rect.left + rect.width / 2);
        const yOffset = clientY - (rect.top + rect.height / 2);

        if (isHovering) {
            // Move the container slightly in the direction of the cursor
            gsap.to(sectionRef.current, {
                x: xOffset,
                y: yOffset,
                rotationY: xOffset / 2,
                rotationX: -yOffset / 2,
                transformPerspective: 500,
                duration: 1,
                ease: "power1.out",
            });

            // Move the inner content in the opposite direction for a parallax effect
            gsap.to(contentRef.current, {
                x: -xOffset,
                y: -yOffset,
                duration: 1,
                ease: "power1.out",
            });
        }
    };

    useEffect(() => {
        // Reset the position of the content when hover ends
        if (!isHovering) {
            gsap.to(sectionRef.current, {
                x: 0,
                y: 0,
                rotationY: 0,
                rotationX: 0,
                duration: 1,
                ease: "power2.inOut",
            });

            gsap.to(contentRef.current, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "power2.inOut",
            });
        }
    }, [isHovering]);
    return (
        <div
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="absolute z-50 size-full overflow-hidden rounded-lg"
            style={{
                perspective: "500px",
            }}
        >
            <div
                ref={contentRef}
                className="origin-center rounded-lg"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default VideoPreview;