//Route that will update the corresponding course and return a 204 HTTP status code and no content.
router.put('/courses/:id', authenticateUser,
asyncHandler(async (req, res, next) => {
  const course = await Course.findByPk(req.params.id);
    if (!course) {
        const error = new Error();
        error.status = 404;
        error.message = 'Course not found';
        next(error);
    } else {
        await course.update(req.body);
        res.status(204).end();
  }
})
);

//route that will delete the corresponding course and return a 204 HTTP status code and no content.