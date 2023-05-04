import ProfileHeader from '@/components/ProfileHeader'
import RepoList from '@/components/RepoList'
import { UserDetail } from '@/types/UserDetail'
import fetcher from '@/utils/fetcher'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

export default function Detail() {
    const router = useRouter()
    const { username } = router.query
    const {data:user,error} = useSWR<UserDetail>(username && `https://api.github.com/users/${username}`, fetcher)
  return (
    <div>
      <Head>
        <title>Detail {user?.name}</title>
      </Head>
      <div>
        <ProfileHeader user={user}/>
        <RepoList repoUrl={user?.repos_url} />
      </div>
    </div>
  )
}
