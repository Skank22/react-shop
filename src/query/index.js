import { gql } from '@apollo/client';

export const GET_KB = gql`
    query publicKb($domain: String!) {
        publicKb(domain: $domain) {
            id
			name
			domainName
			magicStyles
			publicSections {
				id
				title
				slug
				description
				publicCategories {
					id
					title
					slug
					description
					publicArticles {
						id
						title
						slug
						featured
					}
				}
			}
        }
    }
`;

export const GET_CATEGORIES = gql`
    query categories($sectionId: Int, $id: Int) {
		data: categories(sectionId: $sectionId, id: $id) {
			id
			status
			entityType
			title
			createdAt
			updatedAt
			description
			slug
			author {
				id
				firstName
				lastName
			}
			section {
				id
				slug
				title	
			}
			articles {
				id
				slug
				title
			}
			image {
				id
				datafile
			}
		}
	}
`;

export const GET_PUBLIC_ARTICLES = gql`
	query publicArticles($categories_Id: Int!) {
		data: publicArticles(categories_Id: $categories_Id) {
			id
			categories {
				id
				slug
				title
			}
			title
			slug
			description
		}
	}
`;

export const GET_PUBLIC_ARTICLE = gql`
	query publicArticle($id: Int, $slug: String, $kbId: Int) {
		data: publicArticle(id: $id, slug: $slug, kbId: $kbId) {
			id
			title
			slug
			description
			body
			createdAt
			updatedAt
			likes
			dislikes
			tags {
				id
				tag
			}
			categories {
				id
				title
			}
		}
	}
`;

export const SEARCH_ARTICLE = gql`
	query search($q: String!, $level: String!, $page: String!, $domain: String, $isTag: Boolean) {
		data: search(q: $q, level: $level, page: $page, domain: $domain, isTag: $isTag) {
			... on Article {
				id
				title
				categoriesTitle
				authorName
				sectionTitle
				categoriesIds
				sectionId
				slug
			}
		}
	}
`;
