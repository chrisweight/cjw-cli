# PLAYBOOK

Welcome to the playbook! It details how we like to work. Hat tip for the idea goes to [Derek Peruo](https://github.com/dperuo/about-me/wiki/Playbook).

<!-- TOC insertAnchor:false -->

- [Follow CAT Team Standards](#follow-cat-team-standards)
- [Value Convention over Configuration](#value-convention-over-configuration)
- [Keep Things Simple and Easy to Understand](#keep-things-simple-and-easy-to-understand)
- [Done Is Better Than Perfect](#done-is-better-than-perfect)
- [Remember the Definition of Done](#remember-the-definition-of-done)
- [Work Autonomously, Take Ownership](#work-autonomously-take-ownership)
- [Ask Questions, Give Answers](#ask-questions-give-answers)
- [Don't Repeat Yourself](#dont-repeat-yourself)
- [Automate Everything](#automate-everything)
- [Code Should Do One Thing Well](#code-should-do-one-thing-well)
- [Code Should Be Explicit](#code-should-be-explicit)
- [Use the Best Tool for the Job](#use-the-best-tool-for-the-job)
- [Keep the End User in Mind](#keep-the-end-user-in-mind)

<!-- /TOC -->

## Follow CAT Team Standards
Always use CAT Team [guides](https://teamdocs.digitalpfizer.com/style-guides-index), [templates](https://teamdocs.digitalpfizer.com/templates-index), and [standards](https://teamdocs.digitalpfizer.com). This includes [Pfizer Mobile Dev Standards](https://teamdocs.digitalpfizer.com/pfizer-mds).


## Value Convention over Configuration
Use [sensible defaults](https://en.wikipedia.org/wiki/Convention_over_configuration), common architectures, and common styleguides across all parts of the project.


## Keep Things Simple and Easy to Understand
Look for simple, elegant solutions. Look for future-proof solutions. Subtract and delete before adding new code. The best solutions [look like magic](https://www.youtube.com/watch?v=r2CbbBLVaPk) and should [Just Work™](https://en.wikipedia.org/wiki/Principle_of_least_astonishment).


## Done Is Better Than Perfect
Perfection takes too long. Iterate [often](https://www.youtube.com/watch?v=jHyU54GhfGs). Keep the [feedback loop](https://en.wikipedia.org/wiki/OODA_loop) as short as possible. [Disagree and commit](https://www.amazon.jobs/principles) when needed.


## Remember the Definition of Done
Keep in mind the CAT Team [Definition of Done](https://teamdocs.digitalpfizer.com/done-done):

* Does the feature fulfil the stated goal?
* Are there tests?
* Is it sufficiently documented?
* Have I followed the [ADRs](https://teamdocs.digitalpfizer.com/adr) and [TDRs](#)?


## Work Autonomously, Take Ownership
No blame. No excuses. Say what you mean, mean what you say, don't be mean when you say it. Deliver as promised. Trust your team to do the same.


## Ask Questions, Give Answers
Communicate with your team. Ask questions, share answers.  Avoid silos. Spread knowledge as quickly as possible. Trust your team to do the same.


## Don't Repeat Yourself
Don't reinvent the wheel. Start with existing options and iterate from there.


## Automate Everything
Automate everything. This let's people focus on [deep work](http://calnewport.com/blog/2012/11/21/knowledge-workers-are-bad-at-working-and-heres-what-to-do-about-it/).


## Code Should Do One Thing Well
Code should be self contained and follow [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy):

1. Each module and component does one thing well.
1. Larger, more complex modules and components build on top of smaller, simplier modules and components.
1. All modules and componenets must be "plug-and-play" ready: Adding new modules and componenets to a project must be as simple as importing the appropriate file or folder and wiring it into the project.


## Code Should Be Explicit
The purpose of your code should be clear, direct, and easy to grok without searching the rest of the codebase. Avoid implied code. Leave no room for confusion or doubt about what your code does or how to use it.


## Use the Best Tool for the Job
Don't put [square pegs in round holes](https://en.wikipedia.org/wiki/Square_peg_in_a_round_hole). Use the right tool for the job at hand.


## Keep the End User in Mind
Users should be the heroes of their own stories. Actions should have a narrative with well-defined beginnings, middles, and ends. [Don't make them think](http://www.uxbooth.com/articles/10-usability-lessons-from-steve-krugs-dont-make-me-think/). Successes should be clearly rewarded. The best narratives [adapt to the user](http://www.uxbooth.com/articles/progressive-content/).

