# Components

## Navigation

A sticky header navigation component with automatic active section tracking.

### Import

```vue
<script setup>
import Navigation from '@/components/Navigation.vue'
</script>
```

### Usage

```vue
<template>
	<Navigation />
</template>
```

### Features

- Sticky header with backdrop blur
- Automatic active section highlighting based on scroll position
- Responsive logo, navigation links, and donate button
- Smooth transitions

## NavigationButton

Individual navigation link component with active state styling.

### Import

```vue
<script setup>
import NavigationButton from '@/components/NavigationButton.vue'
</script>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | String | required | Link destination (anchor or URL) |
| `active` | Boolean | `false` | Active state styling |

### Usage

```vue
<NavigationButton href="#home" :active="true">
	Home
</NavigationButton>
```

## Button

A reusable button component based on the Figma design system.

### Import

```vue
<script setup>
import Button from '@/components/Button.vue'
</script>
```

### Basic Usage

```vue
<Button variant="primary">
  Click Me
</Button>
```

### Props

| Prop | Type | Default | Options | Description |
|------|------|---------|---------|-------------|
| `variant` | String | `'primary'` | `'primary'`, `'secondary'`, `'outline'`, `'ghost'` | Button style variant |
| `size` | String | `'default'` | `'small'`, `'default'`, `'large'` | Button size |
| `type` | String | `'button'` | `'button'`, `'submit'`, `'reset'` | HTML button type |
| `href` | String | `null` | Any URL | Renders as `<a>` tag with link |
| `to` | String/Object | `null` | Vue Router path | Renders as `<router-link>` |
| `disabled` | Boolean | `false` | `true`, `false` | Disables the button |
| `showLabel` | Boolean | `true` | `true`, `false` | Show/hide button label (for icon-only buttons) |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Button label/text |
| `iconBefore` | Icon displayed before the label |
| `iconAfter` | Icon displayed after the label |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@click` | `Event` | Emitted when button is clicked |

### Examples

#### Primary Button (Yellow from Figma)
```vue
<Button variant="primary">
  Register
</Button>
```

#### Secondary Button (Teal)
```vue
<Button variant="secondary">
  Learn More
</Button>
```

#### Outline Button
```vue
<Button variant="outline">
	Contact Us
</Button>
```

#### Ghost Button (Transparent)
```vue
<Button variant="ghost">
	Learn More
</Button>
```

#### Different Sizes
```vue
<Button size="small">Small Button</Button>
<Button size="default">Default Button</Button>
<Button size="large">Large Button</Button>
```

#### Submit Button in Form
```vue
<form @submit.prevent="handleSubmit">
  <Button type="submit" variant="primary">
    Submit
  </Button>
</form>
```

#### As Link
```vue
<!-- External Link -->
<Button href="https://example.com" variant="primary">
  External Link
</Button>

<!-- Router Link -->
<Button to="/about" variant="secondary">
  About Us
</Button>
```

#### Disabled State
```vue
<Button variant="primary" :disabled="true">
  Disabled Button
</Button>
```

#### With Icons
```vue
<script setup>
import { IconChevronRight, IconDownload } from '@tabler/icons-vue'
</script>

<template>
	<!-- Icon Before -->
	<Button variant="primary">
		<template #iconBefore>
			<IconChevronRight :size="16" />
		</template>
		Next
	</Button>
	
	<!-- Icon After -->
	<Button variant="secondary">
		Download
		<template #iconAfter>
			<IconDownload :size="16" />
		</template>
	</Button>
	
	<!-- Icon Only (hide label) -->
	<Button variant="ghost" :show-label="false">
		<template #iconBefore>
			<IconDownload :size="20" />
		</template>
		Download
	</Button>
</template>
```

#### With Click Handler
```vue
<template>
	<Button variant="primary" @click="handleClick">
		Click Me
	</Button>
</template>

<script setup>
const handleClick = () => {
	console.log('Button clicked!')
}
</script>
```

### Design System

The Button component matches the Figma design with:

- **Primary (Pill/Yellow)**: `bg-yellow-9` with hover state `bg-yellow-10`
- **Secondary (Teal)**: `bg-teal-9` with hover state `bg-teal-10`
- **Outline**: Transparent with `border-teal-9`
- **Ghost**: Transparent with `text-teal-1`, hover `bg-black/20`
- **Typography**: Uses Montserrat Medium (500) from design system
- **Shadow**: Matches Figma shadow values exactly
- **Border Radius**: Full rounded corners (pill shape)
- **Icons**: Support for before/after icon slots

### Styling

The component uses scoped styles and includes:
- Smooth transitions (0.2s ease)
- Active state animation (1px translateY)
- Disabled state with reduced opacity
- Shadow from Figma design system

