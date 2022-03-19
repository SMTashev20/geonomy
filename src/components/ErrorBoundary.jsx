import { Component } from "react";
import { 
    ParentErrorBoundary,
    Whoops,
    Description,
    Astronaut
} from './ErrorBoundaryStyles'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            stack: null,
        };
    }

    componentDidCatch(error, stack) {
        this.setState({
            error,
            stack,
        });
    }

    render() {
        if (this.state.error) {
            return (
                <ParentErrorBoundary>
                    <Whoops>Whoops...</Whoops>
                    <Description><code>{this.state.error.toString()}</code></Description>
                    <Description><code>{this.state.stack.componentStack}</code></Description>

                    <svg width="920" height="920" viewBox="0 0 1255 1255" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="627.288" cy="627.288" r="627.288" fill="url(#paint0_radial_540_27)" fillOpacity="0.86"/>
                        <circle cx="627.288" cy="626.822" r="415.534" stroke="white" strokeWidth="5" strokeDasharray="10 10"/>

                        <defs>
                            <radialGradient id="paint0_radial_540_27" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(627.288 627.288) rotate(90) scale(627.288)">
                                <stop offset="0.0206471" stopColor="#0A0026" stopOpacity="0"/>
                                <stop offset="0.6664" stopColor="#AAAAAA" stopOpacity="0"/>
                                <stop offset="0.6665" stopColor="#1E0095"/>
                                <stop offset="1" stopColor="#1A0062" stopOpacity="0"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </ParentErrorBoundary>
            );
        } else {
            return this.props.children;
        }
    }
}