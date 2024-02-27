<h1>Town lake GITFLOW</h1>

<h2>1. Name of branches</h2>

- ***'main'*** branch:
  Main development branch. This branch contains stable code ready for deployment.
  Title: 'master'

- ***'stage'*** branch:
  Branch for preliminary testing before inclusion in 'main'.
  Name: stage.

- ***'develop'*** branch:
  The branch in which active development occurs. New features and fixes are added to this branch.
  Title: develop

- ***'release'*** branches:
  Branches created to prepare for the release of a new version of an application.
  Name: release/version-number (for example, release/1.0.0).

- ***'feature'*** branches:
  Branches created to develop new functionality.
  Name: feature/task-number-in-jira (for example, feature/WRA-45).

- ***'hotfix'*** branches:
  Branches created to immediately fix problems in the current version in production.
  Name: hotfix/task-number-in-jira (for example, hotfix/WRA-66).

- ***'bugfix'*** branches:
  Branches for bug fixes.
  Name: bugfix/jira-issue-number (e.g. bugfix/WRA-78).

- ***'support'*** branches:
  Branches created to support older versions of the application.
  Name: support/version-number (for example, support/1.0.0).

- ***'chore'*** branches:
  Branches for routine tasks, support, dependency updates, etc.
  Name: chore/descriptive-name or chore/task-number-in-jira (for example, chore/update-dependencies or chore/WRA-59).

- ***'test'*** branches:
  Branches for testing new functionality or fixes.
  Name: test/descriptive-name or test/task-number-in-jira (for example, test/new-feature-testing or test/WRA-65).
- 
- ***'init'*** branches:
  Branch for first project initialization.
  Name: init/descriptive-name or init/task-number-in-jira (for example, init/project-initialization or init/WRA-65).

<h3>Removing branches.</h3>
After successfully merging a child branch with its parent - remotely (ex. feature) branch must be deleted if it was not deleted automatically (this does not apply to branches: 'develop', 'main', 'release', 'stage')

<h2>2. Commits</h2>

- please include your full name and the email associated with your Git account. This allows you to identify the author of the commit (Signed-off-by: Your Full Name)
- separate the commit head and body with an empty line.
- the title should be informative, concise and begin with a verb in the imperative mood (for example, “Add”, “Fix”, “Update”).
- the commit body may contain additional details and explanations.
- write the commit title in the imperative mood. This makes it more readable and easier for automated tools to use. (for example, "Add feature" instead of "Added feature" or "Adding feature")
- add prefixes to the commit title (e.g. "feature:" for new features, "hotfix:" for fixes...)
- add issue number from Jira (eg WRA-12)

**Example of a correct commit:**

<code>feature [WRA-12]: Add user authentication

Implement user authentication to secure access to the application.

Signed-off-by: Sanjar Suyunov <sanjarsuyunov1304@gmail.com></code>

<h2>3. Squash commits</h2>

Commit squashing is the process of merging multiple consecutive commits into one.

It is better to do squash commits when the commits have not yet been pushed to the remote branch (do it locally).

Squashing is needed before merging a branch into the main branch (for example, develop or master). This reduces the number of commits added to the master branch and makes the history more manageable.

<h2>4. Rebase VS Merge</h2>

**Rebase** should be used when:

- it is necessary to pull changes from the dev or main branches into the branch, which they plan to include in the main branch in the future.

**Merge** should be used when
the branch has been published and multiple developers are working on it, using merge may be preferable to avoid commit history issues.

- If it is important to preserve the original commit history, then merge may be a better option.
- when merging a child development branch into a parent one
