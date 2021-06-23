// BREADCRUMB

export interface BreadCrumbLinkProp {
    label: string
    href: string
}

export interface BreadCrumbProps {
    links: BreadCrumbLinkProp[]
}

// PROJECT

export interface IProject {
    thumbnail: string
    title: string
    location: string
    features: string[]
    experience?: string
    feelings?: string[]
}
