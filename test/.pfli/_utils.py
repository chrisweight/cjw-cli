#!/usr/bin/env python
# -*- coding: UTF-8 -*-
"""Utility methods used in other scripts."""


def show_error(kind, *items):
    """Print error messages based on message type."""

    error_msg = {
        'fatal': "☠️   FATAL ERROR! Something went very wrong. See stack trace for details.",
        'missing': "⚠️   WARNING! {0} not found. Please install {0} to continue."
    }

    if items:
        for item in items:
            print error_msg[kind].format(item)
    else:
        print error_msg[kind]


if __name__ == '__main__':
    exit("📦   MODULE! Please import this module into another file.")
