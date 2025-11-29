# Terravision Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium architecture and construction firms' digital presence with a focus on visual storytelling and professional credibility. The design emphasizes modern minimalism with architectural sophistication.

## Core Design Elements

### A. Typography
- **Primary Font**: Modern sans-serif (clean, professional, architectural feel)
- **Hierarchy**:
  - Hero Headlines: Bold, large (48-72px desktop, 32-48px mobile)
  - Section Headers: Semi-bold (32-48px desktop, 24-32px mobile)
  - Body Text: Regular weight (16-18px)
  - Captions: Light weight (14px)

### B. Color Palette
- **Primary**: Terracotta (#A64B2A) - for CTAs, accents, active states
- **Secondary**: Charcoal (#1F1F1F) - for text, dark backgrounds
- **Accent**: Muted Green (#5C6F60) - for subtle highlights, icons
- **Base**: White (#FFFFFF) - for backgrounds, contrast
- **Usage**: Terracotta for CTAs and emphasis, Charcoal for text/headers, White for clean sections, Muted Green for supporting elements

### C. Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, m-8, gap-12, etc.)
- Consistent section padding: py-16 to py-24 desktop, py-12 mobile
- Component spacing: gap-6 to gap-12
- Container max-width: max-w-7xl with px-6 padding

### D. Component Library

**Navigation**
- Fixed navbar with logo left, navigation center/right
- Transparent on hero, solid charcoal on scroll
- Active state: Terracotta underline/indicator
- Mobile: Hamburger menu, full-screen overlay

**Hero Sections**
- Full-width with large background image (architectural/construction imagery)
- Height: 80-90vh on desktop
- Overlay: Dark gradient (charcoal to transparent) for text readability
- CTA buttons with blurred glass-morphism background effect
- Headline + subheadline + dual CTAs ("Request Quote" + "View Projects")

**ServiceCard**
- Card layout with image top, content below
- Hover effect: Subtle lift (shadow increase)
- Image aspect ratio: 4:3
- Content: Icon + Title + 2-3 line description
- Grid: 3 columns desktop, 2 tablet, 1 mobile

**ProjectCard**
- Image-first card with category badge overlay
- Hover: Image zoom, overlay with project name
- Filterable by service category
- Grid: 3 columns desktop, 2 tablet, 1 mobile

**TestimonialSlider**
- Centered quote card design
- Client photo (circular, 80px) + Name + Role
- Quote text (italic, 18-20px)
- Navigation dots below
- Auto-rotate every 5 seconds

**TimelineStep**
- Vertical timeline on mobile, horizontal on desktop
- Icon circle (80px) with connecting line
- Step number + Title + Description
- Alternate left/right positioning (desktop)

**ContactForm**
- Two-column layout desktop (form left, info right)
- Single column mobile
- Input fields: Name, Email, Phone, Service Interest (dropdown), Message
- Primary button: Terracotta, full-width mobile
- Validation states with subtle border color changes

**WhatsApp Button**
- Fixed position: bottom-right (24px from edges)
- Circular button (60px diameter)
- Muted Green background with white WhatsApp icon
- Subtle shadow and pulse animation
- Above all content (z-index high)

### E. Animations
**Minimal & Purposeful**:
- Fade-in on scroll for section entry (0.3s ease)
- Slide-up for cards (0.4s ease, staggered 0.1s delay)
- Smooth scroll behavior for anchor links
- Image lazy-load with fade-in
- Hover states: 0.2s ease transitions

## Page-Specific Design

**Home**: Hero + 4-5 sections (Services grid, Featured Projects, Why Choose Us, Testimonials, CTA)

**About**: Story section (text + image side-by-side) + Mission/Values cards (3-4 items) + Team grid (if applicable) + Stats bar

**Services**: Hero + 5 detailed service sections (image alternating left/right with content) + Service comparison table

**Projects**: Filter bar (sticky) + Project grid + Individual project detail pages (image gallery + specs)

**Execution**: Hero + Timeline visualization (5 steps) + Supporting imagery

**Contact**: Hero + Two-column (form + map/info) + FAQ section (optional)

## Images
**Hero Images**: Large, high-quality architectural/construction photography
- Home: Modern building exterior or interior fit-out
- Services: Relevant service imagery (MEP systems, renovation work, etc.)
- Projects: Portfolio work showcase
- Contact: Office or team at work

**Section Images**: Supporting imagery for services, about story, project examples (placeholder architectural photography)

**Aspect Ratios**: 16:9 for hero, 4:3 for cards, 1:1 for team photos

## Accessibility
- Minimum contrast ratio 4.5:1 for text
- Focus states with terracotta outline
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support