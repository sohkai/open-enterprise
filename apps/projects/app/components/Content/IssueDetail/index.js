import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useAragonApi } from '../../../api-react'
import {
  Bar,
  Button,
  BackButton,
  Header,
  IconPlus,
  useLayout,
} from '@aragon/ui'
import { useQuery } from '@apollo/react-hooks'
import useShapedIssue from '../../../hooks/useShapedIssue'
import { GET_ISSUE } from '../../../utils/gql-queries.js'
import { initApolloClient } from '../../../utils/apollo-client'
import EventsCard from './EventsCard'
import DetailsCard from './DetailsCard'
import BountyCard from './BountyCard'
import { usePanelManagement } from '../../Panel'
import usePathHelpers from '../../../../../../shared/utils/usePathHelpers'
import { useDecoratedRepos } from '../../../context/DecoratedRepos'

function Wrap({ children, repo }) {
  const { goBack } = usePathHelpers()
  const { setupNewIssue } = usePanelManagement()

  return (
    <>
      <Header
        primary={repo && repo.metadata.name}
        secondary={
          <Button mode="strong" icon={<IconPlus />} onClick={setupNewIssue} label="New issue" />
        }
      />
      <Bar>
        <BackButton onClick={() => {
          if (repo) goBack({ fallback: '/projects/' + repo.data._repo })
        }} />
      </Bar>
      {children}
    </>
  )
}

Wrap.propTypes = {
  children: PropTypes.node.isRequired,
  repo: PropTypes.shape({
    data: PropTypes.shape({
      _repo: PropTypes.string.isRequired,
    }).isRequired,
    metadata: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
}

const IssueDetail = ({ issueId }) => {
  const { appState: { github } } = useAragonApi()
  const client = useMemo(() => initApolloClient(github.token), [])
  const { layoutName } = useLayout()
  const shapeIssue = useShapedIssue()
  const { loading, error, data } = useQuery(GET_ISSUE, {
    client,
    onError: console.error,
    variables: { id: issueId },
  })

  const repos = useDecoratedRepos()
  const repo = useMemo(() => {
    if (!data || !data.node) return null
    return repos.find(repo => repo.data._repo === data.node.repository.id)
  }, [ data, repos ])

  if (loading) return <Wrap>Loading...</Wrap>
  if (error) return <Wrap>{JSON.stringify(error)}</Wrap>

  const issue = shapeIssue(data.node)
  const columnView = layoutName === 'small' || layoutName === 'medium'

  return (
    <Wrap repo={repo}>
      {columnView ? (
        <div css="display: flex; flex-direction: column">
          <div css={`
                  min-width: 330px;
                  width: 100%;
                  margin-bottom: ${layoutName === 'small' ? '0.2rem' : '2rem'};
                `}
          >
            <DetailsCard issue={issue} />
          </div>
          <div css="min-width: 330px; width: 100%">
            {issue.hasBounty && <BountyCard issue={issue} />}
            <EventsCard issue={issue} />
          </div>
        </div>
      ) : (
        <div css="display: flex; flex-direction: row">
          <div css={`
                  max-width: 705px;
                  min-width: 350px;
                  width: 70%;
                  margin-right: 2rem;
                `}
          >
            <DetailsCard issue={issue} />
          </div>
          <div css="flex-grow: 1">
            {issue.hasBounty && <BountyCard issue={issue} />}
            <EventsCard issue={issue} />
          </div>
        </div>
      )}
    </Wrap>
  )
}

IssueDetail.propTypes = {
  issueId: PropTypes.string.isRequired,
}

export default IssueDetail
