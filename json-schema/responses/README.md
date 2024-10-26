This directory contains json schemas and examples for the responses to requests to a web api.

An example to a request to `get_badge_task` is found at `examples\example_response_to_get_badge_task.json`.

Similarly, a schema for a request to `get_user_task_list` is found at `schemas\response_to_get_user_task_list.schema.json`.

# Clarifying the requests

The following are brief clarifications for the intention behind each kind of request.

## `get_badge_task`

Given a `badge_id`, return the associated task and its required subtasks that were completed in order to earn the badge.

## `get_user_badges`

Given a `user_id`, return a list of badges that the user as earned so far

## `get_user_profile_info`

Given a `user_id`, return the information associated with that user's profile

## `get_user_task_list`

Given a `user_id`, return the list of tasks and their respective subtasks that should be displayed to the user on the home screen. 

Include information about whether each subtask has been completed or not.