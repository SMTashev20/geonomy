import { forwardRef, Suspense, useContext, useState, useEffect } from "react";
import { Text, GradientTexture } from "@react-three/drei";
import { useHref, useLinkClickHandler } from 'react-router-dom'
import CountryDataContext from '../CountryDataContext';

import JosefinSansBoldFont from '../../fonts/JosefinSans-Bold.woff';
import RalewaySemiBoldFont from '../../fonts/Raleway-SemiBold.woff';

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
        <group position={[0, 0, 0]}>
            <Text
                position={[0, 0, 0]}
                color={'#8A4ADD'}
                font={JosefinSansBoldFont}
                fontSize={1}
                onPointerMove={console.log}
            >
                <meshBasicMaterial>
                    <GradientTexture stops={[0, 1]} colors={['#ffffff', '#8A4ADD']} size={100} />
                </meshBasicMaterial>
                GEONOMY
            </Text>

            {countryDataContext.error ?
                <HoverText
                    position={[0, -0.5, 0]}
                    fonts={RalewaySemiBoldFont}
                    fontSize={0.2}
                    hoverColor="red"
                >
                    <meshBasicMaterial />
                    An error occurred!
                </HoverText> : countryDataContext.loading ? 
                    <HoverText
                        position={[0, -0.7, 0]}
                        fonts={RalewaySemiBoldFont}
                        fontSize={0.3}
                        hoverColor="red"
                    >
                        <meshBasicMaterial />
                        {countryDataContext.loadingStatus}   
                    </HoverText> :
                    <LinkHoverText
                        position={[0, -0.5, 0]}
                        font={RalewaySemiBoldFont}
                        fontSize={0.2}
                        hoverColor="red"
                        to="/start"
                    >
                        <meshBasicMaterial />
                        The world is in your hands!
                    </LinkHoverText>
            }
        </group>
    </Suspense>;
}