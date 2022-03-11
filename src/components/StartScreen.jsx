import { forwardRef, Suspense, useContext, useState } from "react";
import { Text, GradientTexture } from "@react-three/drei";
import { useHref, useLinkClickHandler } from 'react-router-dom'
import CountryDataContext from '../CountryDataContext'

const HoverText = forwardRef(({ hoverColor, children, ...props }, ref) => {
    const [hovered, setHovered] = useState(false);
    const over = () => setHovered(true);
    const out = () => setHovered(false);

    return <Text {...props} ref={ref} color={hovered ? hoverColor : null} onPointerOver={over} onPointerOut={out}>
        {children}
    </Text>
})

const LinkHoverText = forwardRef(
    (
        {
            onClick,
            replace = false,
            state,
            target,
            to,
            ...props
        },
        ref
    ) => {
        let href = useHref(to);
        let handleClick = useLinkClickHandler(to, {
            replace,
            state,
            target,
        });

        return (
            <HoverText
                {...props}
                onClick={(event) => {
                    onClick?.(event);
                    if (!event.defaultPrevented) {
                        event.preventDefault = () => {}; // so useLinkClickHandler doesn't try to call undefined
                        handleClick(event);
                    }
                }}
                ref={ref}
                target={target}
            />
        );
    }
);

export function StartScreen({ ...props }) {
    const countryDataContext = useContext(CountryDataContext);

    return <Suspense fallback={null}>
        <Text
            position={[0, 0, 3]}
            color={'#8A4ADD'}
            font="./fonts/JosefinSans-Bold.woff"
            fontSize={1}
            onPointerMove={console.log}
        >
            <meshBasicMaterial>
                <GradientTexture stops={[0, 1]} colors={['#ffffff', '#8A4ADD']} size={100} />
            </meshBasicMaterial>
            GEONOMY
        </Text>

        <LinkHoverText
            position={[0, -0.5, 3]}
            font="./fonts/Raleway-SemiBold.woff"
            fontSize={0.2}
            hoverColor="red"
            to="/start"
        >
            <meshBasicMaterial />
            {countryDataContext.loading ? countryDataContext.loadingStatus : "The world is in your hands!"}
        </LinkHoverText>
    </Suspense>;
}