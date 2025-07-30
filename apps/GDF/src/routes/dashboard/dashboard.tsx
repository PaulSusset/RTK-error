import AbcIcon from '@mui/icons-material/Abc'
import {
  Card,
  CardContent,
  Grid2 as Grid,
  SvgIconTypeMap,
  Typography,
} from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { useGetContributorDataQuery } from 'modules/contributeurs'
import { Link } from 'react-router-dom'
type Icon = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string
}

export interface CardDetail {
  name: string
  icon: JSX.Element
  link: string
  hidden?: boolean
}
export const outilsList: CardDetail[] = []

const Dashboard = () => {
  const {} = useGetContributorDataQuery('test')
  return (
    <div>
      <Grid container spacing={8}></Grid>
    </div>
  )
}

export default Dashboard
