export type Project = {
  id: number;
  name: string;
  deployment_url: string;
  last_commit_name: string;
  updated_at: {
    when: string;
    from_other_services: boolean;
    service?: string;
  }
}