import { NextApiRequest, NextApiResponse } from "next"

const projects = [
  {
    id: 1,
    name: "github-search",
    deployment_url: "github-search-virid-seven.vercel.app",
    last_commit_name: "update home",
    updated_at: {
      when: "12/26/21",
      from_other_services: true,
      service: "github"
    }
  },
  {
    id: 2,
    name: "ignews",
    deployment_url: "ignews.vercel.app",
    last_commit_name: "update readme",
    updated_at: {
      when: "12/16/21",
      from_other_services: true,
      service: "github"
    }
  },
  {
    id: 3,
    name: "wise-rick-next-app",
    deployment_url: "wise-rick-next-app.vercel.app",
    last_commit_name: "add dark mode",
    updated_at: {
      when: "10/28/21",
      from_other_services: true,
      service: "github"
    }
  },
  {
    id: 4,
    name: "dashboard",
    deployment_url: "dashboard.vercel.app",
    last_commit_name: "finish customization",
    updated_at: {
      when: "09/06/21",
      from_other_services: false
    }
  }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_: NextApiRequest, res: NextApiResponse) => {
  try{
    res.status(200).json(projects)
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' })
  }
}
