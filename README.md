# Extrinsec AppDefender

## AppDefender Demo on Azure Functions

This repo demonstrates running a sample Azure function with Extrinsec AppDefender enabled.  For more detailed information on the benefits of AppDefender or how it works, please visit the [main AppDefender repository](https://github.com/extrinsec/appdefender).

## Prerequisites

1. a Github account, to fork this repo so you can run your own Github actions workflows
1. an Azure account/subscription with a service principal configured for access.  See [this doc](https://www.serverless.com/framework/docs/providers/azure/guide/credentials) for more details. Sample `az cli` commands below:
   ```console
   $ az login
   $ az account set -s <yourAzureSubscriptionId>
   $ az ad sp create-for-rbac --name AppDefenderDemo
   $ # save the values of the output
   $ export AZURE_CLIENT_ID=<appId>
   $ export AZURE_TENANT_ID=<tenant>
   $ export AZURE_CLIENT_SECRET=<password>
   $ # grant Azure app access to resources
   $ az role assignment create --assignee $AZURE_CLIENT_ID --role Contributor
   ```
1. an Extrinsec license key
1. (Optional) an Extrinsec policy group name
   - defaults to the observeAll.ability public group

## Deploy to Azure Functions

1. save your Extrinsec license key as a Github Actions secret on your forked repo, as `ES_LICENSE_KEY`
2. save Azure subscription id and service principal credentials as Github Actions secrets
   - `AZURE_SUBSCRIPTION_ID`
   - `AZURE_CLIENT_ID`
   - `AZURE_TENANT_ID`
   - `AZURE_CLIENT_SECRET`
3. enable and run the Github Actions workflow
4. observe your Azure Function logs

Note:
- two functions with runtimes for NodeJS and Python are shown here.  Feel free to remove any that you don't use, or change the runtime versions
- only outbound data capturing by AppDefender is shown in these samples.  Feel free to update the functions to see other use cases
- AppDefender only supports linux based runtimes at the moment, for both consumption and premium plans

