import { createLazyFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet'
import { t } from 'i18next'
import RegisteredUsers from '../pages/registeredUsers'

export const Route = createLazyFileRoute('/_auth/registeredUsers')({
  component: () => (
    <>
      <RegisteredUsers />
      <Helmet>
        <title>{t('Registered Users')}</title>
      </Helmet>
    </>
  ),
})
