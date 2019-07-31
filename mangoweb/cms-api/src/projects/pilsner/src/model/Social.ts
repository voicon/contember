import { SchemaDefinition as d } from 'cms-api'
import { Site } from './'

export const SocialNetwork = d.createEnum('facebook', 'twitter', 'youtube', 'instagram')

@d.Unique('site', 'network')
export class SocialLink {
	site = d.manyHasOne(Site, 'socialLinks')
	network = d.enumColumn(SocialNetwork)
	url = d.stringColumn()
}
