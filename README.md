# Environment and Urbanization

## Issue management
New issues should be associated with the [E_and_U project](https://github.com/orgs/IIED-org/projects/12/views/1). Status columns are as follows:

- **Backlog**: Issues go here when initially created. Assign the issue to the project and tag it with the relevant milestone.
- **Todo**: Issues go into this column when prioritised and optionally assigned
- **In progress**: When the issue has been assigned and work commenced it moves here.
- **Ready for test**: Issued assigned to someone else to check work is complete
- **Done**: Issue is closed

## Local developer setup with ddev

This repository comes with a `.ddev/config.yaml` file which will help to set up locally using ddev and Docker.

## Requirements

To run locally, you will need [Docker](https://www.docker.com/products/docker-desktop/) (or OrbStack) and [ddev](https://ddev.com/get-started/).

## Setup

1. Clone this repo, move into the directory that contains the codebase:

```
git clone git@github.com:IIED-org/E_and_U.git
cd E_and_U
```

2. Start Docker Desktop and run `ddev start` to build the docker containers. Note that if you have any Lando containers running you will need to stop them (`lando poweroff`).

3. Download a copy of last night's production database via Jenkins and save it to the project root. Import it using the following command:

```
ddev import-db -f <database-yyyymmdd>.sql.gz
ddev drush cr
```

4. To modify the theme, including tailwind.pcss and twig templates, move into the theme directory, install the necessary node modules, and run the watch command:

```
cd docroot/themes/custom/<themeName>
ddev npm install
ddev npm run watch
```

Open https://E_and_U.ddev.site:3000 (note `https`) to view live changes in the browser.

5. Composer updates: run `ddev composer update --dry-run` to see what updates are available. Ensure you're on an issue branch before running the command for real, i.e. without the `--dry-run` flag.

6. Config split

We use the Config Split module to separate configuration intended for
specific environments. We have splits for local, dev, stage and live.
In web/sites/default/settings.ddev.php file we include the
following:

```
/**
 * Use "local" config split for development
 */
$config['config_split.config_split.local']['status'] = TRUE;
$config['config_split.config_split.dev']['status'] = FALSE;
$config['config_split.config_split.stage']['status'] = FALSE;
$config['config_split.config_split.prod']['status'] = FALSE;
```

Running `ddev drush cr` then `ddev drush cim` will import the local split configuration, as well as the default configuration. This will enable modules locally for development (such as devel and stage_file_proxy), and other settings, such as password_expiry and scheduled backups, only on the production server.

The `gitroot/web/sites/default/settings.local.php` file needs to be modified accordingly for each hosting environment. Use `sudo -u admin vi <filename>` on the server(s) to do this.

7. Common drush commands

Generate a one time login link:

```
ddev drush uli
```

Clear the cache:

```
ddev drush cr
```

Inspect the ddev configuration:

```
ddev describe
```

Show available commands:

```
ddev --help
```