.. default-domain:: js
.. highlight:: javascript

=============
stream-logger
=============

    Log messages, events and stdout/stdin (or other) streams

.. raw:: html

    <a href="http://travis-ci.org/busterjs/stream-logger" class="travis">
      <img src="https://secure.travis-ci.org/busterjs/stream-logger.png">
    </a>

``stream-logger`` is a logger that prints certain levels to an out stream and
others to an error stream. It's Based on ``evented-logger``, and defaults to
printing to stdout/stderr.

API
===

``streamLogger(out, err)``
--------------------------

Creates a new logger. ``out`` and ``err`` are two stream objects. ``log``,
``info`` and ``debug`` levels are logged to the ``out`` stream, while ``warn``
and ``error`` levels are logged to the ``err`` stream. If the streams are omitted,
``process.stdout`` and ``process.stderr`` will be used.

::

    var streamLogger = require("stream-logger");

    var logger = streamLogger();
    logger.level = "debug";
    logger.info("Hey there"); // Prints to stdout
    logger.error("Oh noes");  // Prints to stderr

    logger.level = "error";
    logger.info("Hmm"); // Prints nothing

``log(...)``
------------

Also: ``info``, ``debug``, ``warning``, ``error``.

If the current log level is ``log`` or higher, prints a message to the ``out``
stream. See `evented-logger <http://github.com/busterjs/evented-logger/>`_ for
more information on the logger API

``streamForLevel(level)``
-------------------------

Returns an object with a ``write`` method that will indirectly log messages to
``level``. Note that messages written to this stream will not automatically
append line-breaks.

::

    var streamLogger = require("stream-logger");

    var logger = streamLogger();
    var stream = logger.streamForLevel("warning");
    stream.write("Oh");
    stream.write(" noes!\n");

    // Prints "Oh noes\n!" to stderr
