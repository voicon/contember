import { PermissionsBuilder } from '@contember/schema-definition'
import { Acl, Model } from '@contember/schema'

const aclFactory = (model: Model.Schema): Acl.Schema => ({
	roles: {
		admin: {
			variables: {},
			stages: '*',
			entities: PermissionsBuilder.create(model).allowAll().permissions,
		},
		manager: {
			variables: {},
			stages: '*',
			entities: PermissionsBuilder.create(model)
				.onEveryEntity()
				.allowOnlyRead()
				.onEntity([
					'Contact',
					'ContactLocale',
					'ContactLocaleItem',
					'ContactCountry',
					'ContactRegion',
					'ContactDepartment',
					'ContactDepartmentLocale',
					'ContactPerson',
					'ContactPersonLocale',
					'ContactCountryPerson',
					'ContactRegionPerson',
					'Content',
					'ContentBlock',
					'ContentBlockChildren',
					'ContentBlockChildItem',
					'ContentPage',
					'ContentPageLocale',
					'FaqCategory',
					'FaqCategoryLocale',
					'FaqQuestion',
					'FaqQuestionLocale',
					'FooterLocale',
					'FooterColumn',
					'FrontPage',
					'FrontPageLocale',
					'FrontPageContentBlock',
					'FrontPageAboutCompanyColumn',
					'FrontPageProductPromoItem',
					'FrontPageContentPromoItem',
					'FrontPageReference',
					'HeaderLocale',
					'Link',
					'Image',
					'Video',
					'GenericFile',
					'Menu',
					'MenuItem',
					'Post',
					'PostLocale',
					'Seo',
				])
				.allowAll()
				.onEntity('Site')
				.onField(PermissionsBuilder.everyField().except('code', 'order'))
				.allowUpdate()
				.onEntity('SiteLocale')
				.onField(PermissionsBuilder.everyField().except('code', 'order', 'site'))
				.allowAll().permissions,
		},
		siteManager: {
			variables: {
				site_id: {
					type: Acl.VariableType.entity,
					entityName: 'Site',
				},
			},
			stages: '*',
			entities: PermissionsBuilder.create(model)
				.onEntity(['Translation', 'TranslationSet', 'Translatable', 'IconShape'])
				.allowOnlyRead()

				// todo disallow direct access
				.onEntity(['FrontPageContentBlock', 'Link', 'Image', 'Video', 'GenericFile', 'Seo'])
				.allowAll()

				.onEntity('Site')
				.addPredicate('site', { id: 'site_id' })
				.allowOnlyRead('site')
				.onField(PermissionsBuilder.everyField().except('code', 'order'))
				.allowUpdate('site')

				.onEntity(PermissionsBuilder.everyEntity().havingRelation('site'))
				.addPredicate('site', { site: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')

				.onEntity('ContactDepartment')
				.addPredicate('site', { contact: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')
				.onEntity('ContactPerson')
				.addPredicate('site', { department: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')

				.onEntity(PermissionsBuilder.everyEntity().havingRelation('root'))
				.addPredicate('site', { root: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')

				.onEntity('ContactLocaleItem')
				.addPredicate('site', { contactLocale: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')
				.onEntity('ContactCountry')
				.addPredicate('site', { contact: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')
				.onEntity('ContactRegion')
				.addPredicate('site', { country: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')
				.onEntity('ContactCountryPerson')
				.addPredicate('site', { country: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')
				.onEntity('ContactRegionPerson')
				.addPredicate('site', { region: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')

				.onEntity('ContentBlock')
				.addPredicate('site', { content: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')
				.onEntity('ContentBlockChildren')
				.addPredicate('site', { block: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')
				.onEntity('ContentBlockChildItem')
				.addPredicate('site', { parent: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')

				.onEntity('FooterLocale')
				.addPredicate('site', { locale: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')
				.onEntity('FooterColumn')
				.addPredicate('site', { footer: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')

				.onEntity([
					'FrontPageAboutCompanyColumn',
					'FrontPageProductPromoItem',
					'FrontPageContentPromoItem',
					'FrontPageReference',
				])
				.addPredicate('site', { frontPage: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')

				.onEntity('HeaderLocale')
				.addPredicate('site', { locale: PermissionsBuilder.predicateReference('site') })
				.allowAll('site')

				.onEntity('MenuItem')
				.addPredicate('site', { menu: PermissionsBuilder.predicateReference('site') })
				.allowAll('site').permissions,
		},
	},
})

export default aclFactory
