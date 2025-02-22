import { useEffect, useState } from "react";
import { SkeletonLoader } from "./SkeletonLoader"

/**
 * NOTE- This is just a test component.Expect you to check and evaluate base on the loader code.
 * 
 * Haven't really thought about the design,correctness,reusability of this particular component.
 * 
 * This is a component that shows the usage of the SkeletonLoader component.
 * 
 * It shows the usage of the SkeletonLoader component with different props.
 * @returns A LoaderStories component.
 */
export const LoaderStories = () => {
    const [loading, setLoading] = useState(true);
    const [currentTab, setCurrentTab] = useState<'basic'|'profile' | 'article' | 'team' | 'custom'>('profile');

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [currentTab]);

    const buttonStyle = (isActive: boolean) => ({
        padding: '8px 16px',
        border: 'none',
        borderRadius: '20px',
        background: isActive ? '#007AFF' : '#eee',
        color: isActive ? 'white' : 'black',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    });

    return (
        <div style={{
            padding: '24px',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        }}>
            {/* Navigation Tabs */}
            <div style={{
                display: 'flex',
                gap: '16px',
                borderBottom: '1px solid #eee',
                paddingBottom: '16px',
                marginBottom: '16px',
                width: '100%'
            }}>
                {[ 
                    { id: 'profile', label: 'Profile Card' },
                    { id: 'article', label: 'Article Card' },
                    { id: 'basic', label: 'Basic Usage' },
                    { id: 'team', label: 'Team Members' },
                    { id: 'custom', label: 'Custom Styles' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setCurrentTab(tab.id as typeof currentTab)}
                        style={buttonStyle(currentTab === tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Basic Usage Example */}
            {currentTab === 'basic' && (
                <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <h3>Simple Text</h3>
                    <SkeletonLoader loading={loading}>
                        <p style={{ margin: 0 }}>
                            This is a simple paragraph wrapped in a skeleton loader.
                        </p>
                    </SkeletonLoader>

                    <h3>Image</h3>
                    <SkeletonLoader loading={loading}>
                        <img 
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&auto=format"
                            alt="Simple example"
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </SkeletonLoader>

                    <h3>Button</h3>
                    <SkeletonLoader loading={loading}>
                        <button
                            style={{
                                padding: '12px 24px',
                                background: '#007AFF',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer'
                            }}
                        >
                            Click Me
                        </button>
                    </SkeletonLoader>
                </div>
            )}

            {/* Profile Card Example */}
            {currentTab === 'profile' && (
                <SkeletonLoader
                    loading={loading}
                    layout={{
                        containerStyles: { maxWidth: '600px', gap: 8 },
                        items: [
                            { height: '100px', width: '100px', variant: 'circle' },
                            { height: '20px', width: '150px' },
                            { height: '16px', width: '200px' },
                            {
                                height: 'auto',
                                width: 'auto',
                                containerStyles: { gap: 4 },
                                items: [
                                    { height: '16px', width: '100%' },
                                    { height: '16px', width: '100%' },
                                    { height: '16px', width: '55%' }
                                ]
                            },
                        ]
                    }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        maxWidth: '600px'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
                            alt="Profile avatar"
                            style={{
                                height: '100px',
                                width: '100px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />
                        <h2 style={{ margin: 0, fontSize: '20px' }}>John Doe</h2>
                        <p style={{ margin: 0, color: '#666' }}>john.doe@example.com</p>
                        <p style={{ margin: 0, lineHeight: '1.5' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem numquam aliquam illo dicta ut, commodi cupiditate quis rem libero itaque corrupti officiis qui hic minus quisquam quasi voluptas temporibus dolor!
                        </p>
                    </div>
                </SkeletonLoader>
            )}


            {/* Article Card Example */}
            {currentTab === 'article' && (
                <SkeletonLoader
                    loading={loading}
                    layout={{
                        containerStyles: { maxWidth: '800px' },
                        items: [
                            { height: '24px', width: '60%' },
                            { height: '240px', width: '100%' },
                            { height: '18px', width: '60%' },
                            {
                                height: 'auto',
                                width: 'auto',
                                containerStyles: { gap: 4 },
                                items: [
                                    { height: '16px', width: '100%' },
                                    { height: '16px', width: '70%' },
                                ]
                            },
                        ]
                    }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        maxWidth: '800px'
                    }}>
                        <h2 style={{ margin: 0, fontSize: '24px' }}>The Future of Web Development</h2>
                        <div style={{
                            position: 'relative',
                            height: '240px',
                            width: '100%',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop&auto=format"
                                alt="Coding workspace with laptop"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <h3 style={{ margin: 0, fontSize: '18px', color: '#666' }}>Latest Trends in 2024</h3>
                        <p style={{ margin: 0, lineHeight: '1.6' }}>
                            Explore the cutting-edge technologies and methodologies shaping the future of web development.
                            From AI-powered tools to revolutionary frameworks, discover what lies ahead.
                        </p>
                    </div>
                </SkeletonLoader>
            )}

            {/* Without Layout Example. Skeleton adopts height and width from child. */}
            {currentTab === 'team' && (
                <SkeletonLoader
                    loading={loading}
                    layout={{
                        containerStyles: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '24px',
                            width: '100%',
                            maxWidth: '1000px'
                        },
                        items: Array(4).fill({
                            containerStyles: { display: 'flex', flexDirection: 'column', gap: '8px' },
                            items: [
                                { height: '80px', width: '80px', variant: 'circle' },
                                { height: '20px', width: '100%' },
                                { height: '16px', width: '60%' }
                            ]
                        })
                    }}
                >
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '24px',
                        width: '100%',
                        maxWidth: '1000px'
                    }}>
                        {Array(4).fill(Math.random()).map((_temp, index) => <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format"
                                alt="Team member 1"
                                style={{ height: '80px', width: '80px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                            <h3 style={{ margin: 0, fontSize: '16px' }}>John Doe, Frontend Dev</h3>
                            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Bangalore</p>
                        </div>)}
                    </div>
                </SkeletonLoader>
            )}

            {/* Add new Custom Styles example. Custom styles can be applied to the skeleton. */}
            {currentTab === 'custom' && (
                <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {/* Dark Theme Skeleton */}
                    <SkeletonLoader
                        loading={loading}
                        layout={{
                            containerStyles: {
                                display: 'flex',
                                gap: '16px',
                                padding: '24px',
                                background: '#1a1a1a',
                                borderRadius: '12px'
                            },
                            direction: 'row',
                            spacing: 16,
                            items: [
                                {
                                    height: '60px',
                                    width: '60px',
                                    variant: 'circle',
                                    style: {
                                        background: '#333',
                                        color: 'rgba(255,255,255,0.1)'
                                    }
                                },
                                {
                                    direction: 'column',
                                    spacing: 8,
                                    containerStyles: {
                                        flex: 1
                                    },
                                    items: [
                                        {
                                            height: '24px',
                                            width: '70%',
                                            style: {
                                                background: '#333',
                                                color: 'rgba(255,255,255,0.1)'
                                            }
                                        },
                                        {
                                            height: '16px',
                                            width: '40%',
                                            style: {
                                                background: '#333',
                                                color: 'rgba(255,255,255,0.1)'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }}
                    >
                        <div style={{ display: 'flex', gap: '16px', padding: '24px', background: '#1a1a1a', borderRadius: '12px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&auto=format"
                                alt="Dark theme avatar"
                                style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                            />
                            <div>
                                <h3 style={{ margin: 0, color: 'white' }}>Dark Theme Example</h3>
                                <p style={{ margin: '4px 0 0 0', color: '#888' }}>Custom colors</p>
                            </div>
                        </div>
                    </SkeletonLoader>

                    {/* Gradient Skeleton. Multiple skeletons in same row. Different colors.*/}
                    <SkeletonLoader
                        loading={loading}
                        layout={{
                            containerStyles: {
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '16px',
                                padding: '20px',
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                borderRadius: '12px',
                            },
                            items: Array(4).fill({
                                height: '80px',
                                width: '80px',
                                style: {
                                    background: 'rgba(255,255,255,0.1)',
                                    shimmerColor: 'rgba(255,255,255,0.2)',
                                    borderRadius: '12px'
                                }
                            })
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            padding: '20px',
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            borderRadius: '12px',
                        }}>
                            {Array(4).fill(null).map((_, i) => (
                                <div key={i} style={{
                                    width: '80px',
                                    height: '80px',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}>
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </SkeletonLoader>
                </div>
            )}
        </div>
    );
};
