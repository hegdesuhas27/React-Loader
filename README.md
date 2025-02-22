# Skeleton Loader Component

A flexible and customizable skeleton loader component for React applications that provides loading state management without unnecessary mounting/unmounting of child components.

## Installation

```bash
npm install
npm run start
```

## Usage

The loader component is located in `src/Components/Loader`. The main component you'll be working with is `SkeletonLoader.tsx`.

### Basic Example

```tsx
import { SkeletonLoader } from './Components/Loader/SkeletonLoader';

function MyComponent() {
  return (
    <SkeletonLoader loading={isLoading}>
      <MyContent />
    </SkeletonLoader>
  );
}
```

### Key Features

1. **Non-destructive Loading States**: Content is hidden rather than unmounted during loading states using `display: none`, preserving component state and reducing unnecessary re-renders.

2. **Parallel Loading Support**: Children can still render and fetch their own data even when parent loader is active, enabling parallel data fetching patterns.

3. **Multiple Loading Patterns**: Supports both single skeleton and complex layout patterns.

### Customization Options

#### Single Skeleton

For simple loading states, you can customize individual skeletons:

```tsx
<SkeletonLoader 
  loading={isLoading}
  variant="text" // 'text' | 'circle' | 'rect' | 'custom'
  height={100}   // number or string
  width={200}    // number or string
  style={{       // Custom CSS properties
    borderRadius: '8px',
    backgroundColor: '#f0f0f0'
  }}
>
  <Content />
</SkeletonLoader>
```

#### Layout-based Loading

For complex loading patterns, use the layout prop:

```tsx
<SkeletonLoader
  loading={isLoading}
  layout={{
    direction: 'column',        // 'row' | 'column'
    spacing: 16,               // Gap between items
    containerStyles: {         // Styles for the container
      padding: '20px',
      background: '#fff'
    },
    items: [
      { height: '100px', width: '100px', variant: 'circle' },
      { height: '20px', width: '150px' },
      { height: '16px', width: '200px' }
    ]
  }}
>
  <Content />
</SkeletonLoader>
```

### Loading Priority

The component follows this priority order for rendering:
1. Layout configuration (if provided)
2. Height/Width props
3. Children dimensions (adopts height and width from child)

### Props

#### Basic Props
- `loading` (required): Boolean flag to control the loader state
- `variant`: 'text' | 'circle' | 'rect' | 'custom'
- `height`: number | string
- `width`: number | string
- `style`: React.CSSProperties for custom styling
- `customComponent`: React.ReactNode for complete custom skeleton component

#### Layout Props
- `direction`: 'row' | 'column'
- `spacing`: number | string
- `containerStyles`: React.CSSProperties
- `items`: Array of skeleton or nested layout configurations

## Demo

Check `LoaderStories.tsx` for various implementation examples including:
- Basic text and image loading
- Profile card layouts
- Article layouts
- Team member grids
- Custom styled skeletons

> Note: While the loader component is built for production use with flexibility in mind, the `LoaderStories.tsx` file is primarily for demonstration purposes and may not follow all production best practices.

We can in future add more props to the component to make it more flexible and customizable.
We can add a prop to the component to decide wether to keep the children always mounted /unmounted based on the loading state. We can also enhance the component to automatically create the layout based on the children content by iterating over all the nodes in it.