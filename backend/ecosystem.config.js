module.exports = {
  apps : [{
    script: 'app.js',
    name: 'mesto'
  }],

  // Deployment Configuration
  deploy : {
    production : {
       "user" : "fomakina4",
       "host" : "158.160.114.185",
       "ref"  : "origin/main",
       "repo" : "git@github.com:Sashafomak1na/react-mesto-api-full-gha.git",
       "path" : "/home/fomakina4/auto-deploy",
       "pre-deploy-local" : 'scp -Cr .env fomakina4@$158.160.114.185:$/home/fomakina4/auto-deploy/current/backend',
       "post-deploy" : "cd backend && npm ci && pwd && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
};
